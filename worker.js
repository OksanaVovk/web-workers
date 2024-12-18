onmessage = ({ data }) => {
  const fib = (n) => {
    let a = 0,
      b = 1;
    for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return n ? b : a;
  };
  const result = fib(data.data);
  postMessage(result);
};
