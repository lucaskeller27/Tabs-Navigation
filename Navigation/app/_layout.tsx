import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Index" // This is the name of the page and must match the url from root
        options={{
          title: 'Index',
          href: '/Index',
      }}
      />
      <Tabs.Screen
        name="Home" // This is the name of the page and must match the url from root
        options={{
          title: "Home",
          href: '/Home',
        }}
      />
      <Tabs.Screen
        name="Cadastro" // This is the name of the page and must match the url from root
        options={{
          title: "Cadastro",
          href: 'null',
        }}
      />
      <Tabs.Screen
        name="Sobre" // This is the name of the page and must match the url from root
        options={{
          title: "Sobre",
          href: 'null',
        }}
      />
    </Tabs>
  );
}