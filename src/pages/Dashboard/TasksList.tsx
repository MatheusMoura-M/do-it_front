import { Box, Grid } from "@chakra-ui/react";
import Card from "../../components/Card";
import SearchBox from "../../components/Forms/SearchBox";
import Header from "../../components/Header";
import { CardSkeleton } from "../../components/Skeleton/CardSkeleton";
import { iTaskCard } from "../../interfaces";
import { useTasks } from "../../contexts/TasksContext";
import { useEffect } from "react";

interface TasksListsProsps {
  loading: boolean;
  tasks: iTaskCard[];
  handleClick: (task: iTaskCard) => void;
}

const TasksLists = ({ loading, tasks, handleClick }: TasksListsProsps) => {
  const { inputTitleValue } = useTasks();

  const pageCard = () => {
    let cards: any = [];

    tasks.map((task) => {
      task.title.includes(inputTitleValue) && cards.push(task);
    });

    return cards;
  };

  useEffect(() => {
    pageCard();
  }, [inputTitleValue]);

  return (
    <Box>
      <Header />
      <SearchBox />
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(420px,1fr))"
        gap={10}
        paddingX="8"
        mt="8"
      >
        {loading ? (
          <CardSkeleton repeatCount={6} />
        ) : (
          pageCard().map((task: iTaskCard) => (
            <Card onClick={handleClick} key={task.title} task={task} />
          ))
        )}
      </Grid>
    </Box>
  );
};

export default TasksLists;
