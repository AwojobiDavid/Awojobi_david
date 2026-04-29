import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to GIT class<Text style={styles.subtitle}></Text>
      </Text>

      <Text style={styles.subtitle}>Awojobi david</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>let`s go</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Next Steps</Text>
        <Text style={styles.cardText}>
          We can add buttons, navigation, and connect the app to real data.
        </Text>
      </View>

      <Text style={styles.footer}>Keep building 💡</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#225be0",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#d03838",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#c217e0",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#38bdf8",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#cbd5f5",
  },
  footer: {
    marginTop: 30,
    textAlign: "center",
    color: "#64748b",
  },
});
