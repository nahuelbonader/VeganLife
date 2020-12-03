import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { ownerImg } from "../utils/constants";

const Profile = ({ name, image, favsRecipes }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: image ? image : ownerImg }}
          />
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.stats}>
          <Text style={styles.statAmount}> 45</Text>
          <Text style={styles.statTitle}> Recetas </Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statAmount}> 20</Text>
          <Text style={styles.statTitle}> Favoritos</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statAmount}> 45</Text>
          <Text style={styles.statTitle}> Seguidores</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginTop: 64,
    alignItems: "center",
  },
  avatarContainer: {
    shadowColor: "#151734",
    shadowRadius: 30,
    shadowOpacity: 0.4,
  },
  avatar: {
    width: 136,
    height: 136,
    borderRadius: 68,
  },
  name: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 32,
  },
  stats: {
    alignItems: "center",
    flex: 1,
  },
  statAmount: {
    color: "#4F566D",
    fontSize: 18,
    fontWeight: "300",
  },
  statTitle: {
    color: "#C3C5CD",
    fontSize: 13,
    fontWeight: "500",
    marginTop: 4,
  },
});

export default Profile;
