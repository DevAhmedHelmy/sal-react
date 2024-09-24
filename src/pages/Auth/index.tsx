import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  VStack,
  Center,
  HStack
} from "@chakra-ui/react";

import LoginForm from "../../components/forms/LoginForm";
import RegisterForm from "../../components/forms/RegisterForm";
import { Image } from "@chakra-ui/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

enum AuthTabs {
  Login = "login",
  Register = "register"
}

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabQueryParam = searchParams.get("tab") || AuthTabs.Login;
  const tabIndexs = tabQueryParam == AuthTabs.Login ? 0 : 1;
  const [tabIndex, setTabIndex] = useState(tabIndexs);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
    setSearchParams({ tab: index === 0 ? AuthTabs.Login : AuthTabs.Register });
  };
  return (
    <Center minH="100vh" w="min(90%, 1000px)" mx={"auto"}>
      <HStack
        flexGrow={1}
        spacing={0}
        alignItems="stretch"
        borderRadius="8xl"
        shadow={"md"}
      >
        <Box
          bg="#ebfbff"
          textAlign={"center"}
          flexGrow={1}
          py={10}
          borderLeftRadius="8xl"
          borderBottomLeftRadius="8xl"
        >
          <Image
            alt="login image"
            display={"inline-block"}
            maxW="20"
            maxH="30"
            src="https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          />
          <Tabs
            variant="solid-rounded-two-tabs"
            colorScheme="primary"
            as={VStack}
            index={tabIndex}
            onChange={handleTabsChange}
            maxW="md"
            mx="auto"
          >
            <TabList justifyContent="center">
              <Tab>Sign in</Tab>
              <Tab>Sign up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <LoginForm />
              </TabPanel>
              <TabPanel>
                <RegisterForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Flex
          bg="white"
          alignItems="flex-end"
          justifyContent="center"
          borderRadius="8xl"
          w="45%"
          ms="-50px"
        >
          <Image
            src="https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="Auth"
            borderRadius="8xl"
          />
        </Flex>
      </HStack>
    </Center>
  );
};

export default Auth;
