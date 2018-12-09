// 关于面试题的思考
const speak = async () => {
  console.log("我是一只猫");
  console.log("看看直接返回一个值：", await 2);
  console.log("learn:", await learn());
  console.log("write:", await write());
  console.log("1", await 1);
  console.log("sing:", await sing());
  console.log("我是一只狗");
};
const learn = async () => {
  console.log("我正在学习呀");
};
const write = async () => {
  ``;
  console.log("我在写字呀");
  return 1;
};
const sing = async () => {
  console.log("我在准备唱歌。。。。。");
  return new Promise((resolve, rejected) => {
    console.log("我在排队等着唱歌");
    setTimeout(() => {
      console.log("我在唱歌呀");
      resolve("我在唱歌呀");
    }, 2000);
  });
};
console.log("project is starting..... 😁");
speak();
new Promise((resolve, rejected) => {
  console.log("Promise is running....");
  resolve();
}).then((resolved, rejected) => {
  console.log("Promise.then is running....");
});
setTimeout(() => {
  console.log("setTimeout is running.....");
}, 3000);
console.log("projecd is ended......");
