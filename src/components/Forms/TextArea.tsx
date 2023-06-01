import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { iTextAreaProps, inputVariationOptions } from "../../interfaces";

const inputVariation: inputVariationOptions = {
  error: "red.500",
  default: "gray.200",
  focus: "purple.800",
  filled: "green.500",
};

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  iTextAreaProps
> = ({ name, error = null, icon: Icon, label, ...rest }, ref) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    error && setVariation("error");
  }, [error]);

  const handleInputFocus = useCallback(() => {
    error && setVariation("focus");
  }, [error]);

  const handleInputBlur = useCallback(() => {
    value.length > 1 && !error && setVariation("filled");
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel>{label}</FormLabel>}
      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement mt="2.5" color={inputVariation[variation]}>
            <Icon />
          </InputLeftElement>
        )}
        <ChakraTextarea
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          name={name}
          bg="gay.50"
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          variant="outline"
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          size="lg"
          h="60px"
          ref={ref}
          {...rest}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const TextArea = forwardRef(TextAreaBase);
