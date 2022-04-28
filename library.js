var a = 10; // export 가능
var b = 20;
var c = 30;

/* export {a};
export {b};*/
export { a, b }; //둘다 가능

// export default a; //파일당 1회 사용 가능

export default c;
