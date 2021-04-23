import React from "react";
import { View, FlatList } from "react-native";
import { formatData } from "../../../utils/formatData";
import MenuItem from "../../components/menuItem/MenuItem";
import styles from "./styles";
import LargeText from "./../../components/largeText/LargeText";
import { Button } from "react-native-paper";
import MenuHeader from "../../components/menuHeader/MenuHeader";

const Menu = ({ navigation }) => {
  const data = [
    { key: "A" },
    { key: "B" },
    { key: "C" },
    { key: "D" },
    { key: "E" },
    { key: "F" },
    { key: "G" },
    { key: "H" },
    { key: "I" },
    // { key: "J" },
  ];

  const numColumns = 2;


  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={() => <MenuHeader />}
        data={formatData(data, numColumns)}
        numColumns={numColumns}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => <MenuItem item={item} />}
        ListFooterComponent={() => (
          <Button
            onPress={() => alert("proceed")}
            style={styles.button}
            mode="contained"
          >
            Proceed
          </Button>
        )}
      />
    </View>
  );
};

export default Menu;
