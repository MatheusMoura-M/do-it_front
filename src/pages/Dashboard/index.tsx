import { useEffect, useState } from "react";
import { useTasks } from "../../contexts/TasksContext";
import { useAuth } from "../../contexts/AuthContext";
import ModalTaskDetail from "../../components/Modais/ModalTaskDetail";
import TasksLists from "./TasksList";
import FirstTask from "./FirstTask";
import NotFound from "./NotFound";
import { iTaskCard } from "../../interfaces";
import { useDisclosure } from "@chakra-ui/react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { user, accessToken } = useAuth();
  const { tasks, loadTasks, notFound, taskNotFound } = useTasks();
  const [selectedTask, setSelectedTask] = useState<iTaskCard>({} as iTaskCard);

  const {
    isOpen: isTaskDetailOpen,
    onClose: onTaskDetailClose,
    onOpen: onTaskDetailOpen,
  } = useDisclosure();

  const handleClick = (task: iTaskCard) => {
    setSelectedTask(task);
    onTaskDetailOpen();
  };

  useEffect(() => {
    loadTasks(user.id, accessToken).then((res) => setLoading(false));
  }, []);

  if (notFound) {
    return (
      <NotFound
        isTaskDetailOpen={isTaskDetailOpen}
        onTaskDetailClose={onTaskDetailClose}
        selectedTask={selectedTask}
        taskNotFound={taskNotFound}
      />
    );
  }

  return (
    <>
      <ModalTaskDetail
        isOpen={isTaskDetailOpen}
        onClose={onTaskDetailClose}
        task={selectedTask}
      />
      {!loading && !tasks.length ? (
        <FirstTask />
      ) : (
        <TasksLists loading={loading} tasks={tasks} handleClick={handleClick} />
      )}
    </>
  );
};

export default Dashboard;
