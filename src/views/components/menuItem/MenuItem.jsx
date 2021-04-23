import React from "react";
import { Card, Paragraph } from "react-native-paper";
import styles from "./styles";
// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MenuItem = ({ item }) => {
  return (
    <Card style={styles.container}>
      <Card.Cover style={styles.image} source={{ uri: "https://picsum.photos/700" }} />
      <Card.Content>
        <Paragraph>{item.key}</Paragraph>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default MenuItem;
