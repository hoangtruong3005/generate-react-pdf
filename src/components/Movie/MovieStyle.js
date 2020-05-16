import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  movie: {
    backgroundColor: "#ffffff",
  },

  movieContainer: {
    backgroundColor: "#f6f6f5",
    display: "flex",
    flexDirection: "row",
  },

  movieDetails: {
    display: "flex",
    flexDirection: "column",
    padding: "24px 24px",
  },

  movieTitle: {
    fontSize: 15,
    marginBottom: 10,
  },

  movieOverview: {
    width: 250,
    fontSize: 10,
    wordWrap: "break-word",
  },

  image: {
    height: 200,
    width: 150,
  },

  subtitle: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },

  vote: {
    display: "flex",
    flexDirection: "row",
  },

  rating: {
    height: 10,
    width: 10,
  },

  vote_text: {
    fontSize: 10,
  },

  vote_pop: {
    fontSize: 10,
    padding: 2,
    backgroundColor: "#61C74F",
    color: "#fff",
  },

  vote_pop_text: {
    fontSize: 10,
    marginLeft: 4,
  },

  overviewContainer: {
    minHeight: 110,
  },

  detailsFooter: {
    display: "flex",
    flexDirection: "row",
  },

  lang: {
    fontSize: 8,
    fontWeight: 700,
  },

  vote_average: {
    fontSize: 8,
    marginLeft: 4,
    fontWeight: "bold",
  },
});

export default styles;
