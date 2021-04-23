import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styles from "./styles";
// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MenuItem = ({ item }) => {
  const [selected, setSelected] = React.useState(false);
  const [selectedList, setSelectedList] = React.useState([]);

  const select = () => {
    setSelected((prev) => !prev);
    // setSelectedList(prev => [...prev, item])
  };

  //TODO: MAKE AN ARRAY OF SELECTED ITEMS

  
  return (
    <TouchableWithoutFeedback onPress={select}>
      <View style={styles.itemContainer}>
        <Card style={styles.container}>
          <Card.Cover
            style={styles.image}
            source={{ uri: "https://picsum.photos/700" }}
          />
          <Card.Content
            style={[styles.cardContent, selected && styles.selectedFilter]}
          >
            <Paragraph>{item.key}</Paragraph>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MenuItem;
