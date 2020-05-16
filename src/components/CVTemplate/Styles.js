import { StyleSheet } from "@react-pdf/renderer";

export default StyleSheet.create({
  viewContainer: {
    padding: 24,
  },

  wrapped: {
    display: "flex",
    flexDirection: "row",
  },

  section__left: {
    width: "40%",
    paddingTop: 24,
  },

  section__left__card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 210,
    height: 250,
    backgroundColor: "#E0E0E0",
    borderRadius: 28,
  },

  card__image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    transform: "translateY(-25)",
  },

  section__right: {
    width: "60%",
  },

  title: {
    fontWeight: 500,
    fontSize: 13,
    color: "#768FFF",
    textTransform: "uppercase",
  },

  subtitle: {
    marginTop: 12,
    fontSize: 10,
    fontWeight: "bold",
  },

  content: {
    marginTop: 12,
    fontSize: 10,
    textAlign: "justify",
    color: "#333333",
  },

  content__list: {
    paddingLeft: 12,
  },

  content__list__item: {
    display: "flex",
    flexDirection: "row",
  },

  item__icon: {
    width: 8,
    height: 8,
  },

  item__text: {
    paddingLeft: 4,
    fontSize: 10,
    textAlign: "justify",
    color: "#333333",
  },

  description: {
    marginTop: 4,
    fontSize: 8,
    fontWeight: 300,
    textAlign: "justify",
    color: "#333333",
  },

  link: {
    color: "#768FFF",
  },

  detail: {
    marginTop: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },

  detail__content: {
    fontSize: 10,
    textAlign: "justify",
    color: "#333333",
  },

  detail__icon: {
    width: 15,
    height: 15,
    margin: "0 10",
  },

  detail__title: {
    width: 80,
    fontSize: 10,
    fontWeight: "bold",
  },

  detail__level: {
    width: 150,
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  detail__level__dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#768FFF",
    margin: "0 2",
    alignSelf: "flex-end",
  },

  dot__solid: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#C4C4C4",
    margin: "0 2",
    alignSelf: "flex-end",
  },

  rectangle: {
    marginTop: 12,
    width: 180,
    height: 1,
    backgroundColor: "#C4C4C4",
  },
});
