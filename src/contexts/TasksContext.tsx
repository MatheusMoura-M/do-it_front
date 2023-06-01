import axios, { AxiosResponse } from "axios";
import { createContext, useCallback, useContext, useState } from "react";
import { api } from "../services/api";
import { iProviderProps, iTask } from "../interfaces";
import { toast } from "react-toastify";

interface TaskContextData {
  tasks: iTask[];
  createTask: (data: Omit<iTask, "id">, accessToken: string) => Promise<void>;
  loadTasks: (userId: string, accessToken: string) => Promise<void>;
  deleteTask: (taskId: string, accessToken: string) => Promise<void>;
  updateTask: (
    taskId: string,
    userId: string,
    accessToken: string
  ) => Promise<void>;
  notFound: boolean;
  taskNotFound: string;
  inputTitleValue: string;
  setInputTitleValue: React.Dispatch<React.SetStateAction<string>>;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be use within as TaskProvider");
  }
  return context;
};

const TaskProvider = ({ children }: iProviderProps) => {
  const [tasks, setTasks] = useState<iTask[]>([]);
  const [inputTitleValue, setInputTitleValue] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [taskNotFound, setTaskNotFound] = useState("");

  const loadTasks = useCallback(async (userId: string, accessToken: string) => {
    try {
      const resp = await api.get("/task/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      setTasks(resp.data);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
    }
  }, []);

  const createTask = useCallback(
    async (data: Omit<iTask, "id">, accessToken: string) => {
      await api
        .post("/task", data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response: AxiosResponse<iTask>) => {
          setTasks((oldTask) => [...oldTask, response.data]);
          toast.success("Task criada com sucesso", {
            autoClose: 1000,
          });
        })
        .catch((error) => {
          console.log(error);
          if (axios.isAxiosError(error)) {
            toast.error(error.response?.data.error, {
              autoClose: 1000,
            });
          }
        });
    },
    []
  );

  const deleteTask = useCallback(
    async (taskId: string, accessToken: string) => {
      await api
        .delete(`/task/${taskId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => {
          const filteredTasks = tasks.filter((task) => taskId !== task.id);
          setTasks(filteredTasks);
          toast.success("Task deletada com sucesso", {
            autoClose: 1000,
          });
        })
        .catch((error) => {
          console.log(error);
          if (axios.isAxiosError(error)) {
            toast.error(error.response?.data.error, {
              autoClose: 1000,
            });
          }
        });
    },
    [tasks]
  );

  const updateTask = useCallback(
    async (taskId: string, userId: string, accessToken: string) => {
      await api
        .patch(
          `/task/${taskId}`,
          { completed: true, userId },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((_) => {
          const filteredTasks = tasks.filter((task) => task.id !== taskId);
          const task = tasks.find((task) => task.id === taskId);
          if (task) {
            task.completed = true;
            setTasks([...filteredTasks, task]);
          }
        })
        .catch((error) => {
          console.log(error);
          if (axios.isAxiosError(error)) {
            toast.error(error.response?.data.error, {
              autoClose: 1000,
            });
          }
        });
    },
    [tasks]
  );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        loadTasks,
        deleteTask,
        updateTask,
        notFound,
        taskNotFound,
        inputTitleValue,
        setInputTitleValue,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { useTasks, TaskProvider };
