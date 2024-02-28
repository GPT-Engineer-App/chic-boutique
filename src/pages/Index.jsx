import React from "react";
import { Box, Flex, Heading, Text, SimpleGrid, Image, Button, Icon, Stack, useColorModeValue as mode } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

// Sample product data
const products = [
  {
    id: 1,
    name: "Casual T-Shirt",
    price: "$19.99",
    imageUrl: 'https://images.unsplash.com/photo-1525171254930-643fc658b64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjB0LXNoaXJ0fGVufDB8fHx8MTcwOTEyMTI4NXww&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    name: "Elegant Dress",
    price: "$49.99",
    imageUrl: 'https://images.unsplash.com/photo-1589212987511-4a924cb9d8ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJlc3N8ZW58MHx8fHwxNzA5MTIxMzA1fDA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    name: "Office Shirt",
    price: "$29.99",
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzaGlydHxlbnwwfHx8fDE3MDkxMjEzMDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: "$39.99",
    imageUrl: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zfGVufDB8fHx8MTcwOTEyMTMwNnww&ixlib=rb-4.0.3&q=80&w=1080',
  },
];

const ProductCard = ({ product }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={mode("white", "gray.800")}>
      <Image src={product.imageUrl} alt={product.name} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Text color={mode("gray.500", "gray.400")} fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
            New
          </Text>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {product.name}
        </Box>

        <Box>
          {product.price}
          <Box as="span" color={mode("gray.600", "gray.400")} fontSize="sm">
            / unit
          </Box>
        </Box>

        <Flex mt="2" alignItems="center" justifyContent="space-between">
          <Button leftIcon={<Icon as={FaShoppingCart} />} size="sm" colorScheme="blue">
            Add to Cart
          </Button>
          <Button size="sm" variant="ghost" colorScheme="red">
            <Icon as={FaHeart} />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <Heading as="h1" size="xl">
          Clothing Store
        </Heading>
        <Button leftIcon={<Icon as={FaShoppingCart} />} colorScheme="blue" variant="solid">
          Cart
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
