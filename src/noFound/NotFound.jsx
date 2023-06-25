export const NotFound = () => {
  return (
    <main style={{ textAlign: "center" }}>
      <img
        src={require("../assets/Not-Found.gif")}
        alt="Found Anything"
        style={{ width: "500px", display: "block", margin: "2rem auto" }}
      />
      <p>Nothing Found</p>
    </main>
  );
};
