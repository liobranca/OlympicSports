import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
const ShearchCard = ({item}) => {

  return (
    <Center py={20} marginTop={20}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 20,
            left: 0,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(50px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={270}
            width={"100%"}
            objectFit={"contain"}
            src={item.image}
            marginLeft={"auto"}
            marginRight={"auto"}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {item.name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {item.price}
            </Text>

            <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
              Add to cart
            </button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default ShearchCard;