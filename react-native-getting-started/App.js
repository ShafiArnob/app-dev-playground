import { StatusBar as StatusBarRN, Text, View } from "react-native";
import Navigation from "./Navigation";

export default function App() {
  return (
    <>
      <StatusBarRN style="auto"/>
      <Navigation/>
    </>
  );
}
