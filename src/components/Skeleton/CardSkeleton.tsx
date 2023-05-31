import { Box, Skeleton } from "@chakra-ui/react";
import { iCardSkeletonProps } from "../../interfaces";

export const CardSkeleton = ({
  repeatCount = 1,
  ...rest
}: iCardSkeletonProps) => {
  const howMany = Array.from(Array(repeatCount).keys());

  return (
    <>
      {howMany.map((elem) => (
        <Skeleton key={elem} {...rest} speed={1}>
          <Box w={300} h={150} p="7"></Box>
        </Skeleton>
      ))}
    </>
  );
};
