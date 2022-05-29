export const fetchData = async () => {
  try {
    let response = await fetch("../../data.json");
    if (response.ok) {
      let result = await response.json();
      return { error: false, result };
    } else {
      console.warn("error getdata");
      return { error: true };
    }
  } catch (err) {
    console.error("err: ", err);
    return { error: true };
  }
};
