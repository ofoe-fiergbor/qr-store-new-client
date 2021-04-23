import React from "react";
import { View, BackHandler, FlatList } from "react-native";
import { formatData } from "../../../utils/formatData";
import MenuItem from "../../components/menuItem/MenuItem";
import styles from "./styles";
import LargeText from "./../../components/largeText/LargeText";
import { Button } from "react-native-paper";

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
        style={styles.flatlistContainer}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={() => (
          <LargeText textStyle={styles.headerText} text="Blue Moon" />
        )}
        data={formatData(data, numColumns)}
        numColumns={numColumns}
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
