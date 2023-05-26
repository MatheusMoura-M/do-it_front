import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import { iInputProps } from "../../interfaces";
import {
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from "react";

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "red.500",
  default: "gray.200",
  focus: "purple.800",
  filled: "green.500",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, iInputProps> = (
  { name, error = null, icon: Icon, label, ...rest },
  ref
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      return setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel>{label}</FormLabel>}

      <InputGroup flexDirection={"column"}>
        {Icon && (
          <InputLeftElement color={inputVariation[variation]} mt={2.5}>
            <Icon />
          </InputLeftElement>
        )}

        <ChakraInput
          name={name}
          bg={"gray.50"}
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          ref={ref}
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          onChangeCapture={(e) =>
            setValue((e.target as HTMLInputElement).value)
          }
          variant={"outline"}
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          size={"lg"}
          h={"60px"}
          {...rest}
        />

        {!!error && (
          <FormErrorMessage color={"red.500"}>{error.message}</FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
