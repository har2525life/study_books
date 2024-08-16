import Koa from "koa";

const app = new Koa();

const port = 3000;

app.listen(port, () => {
	console.log(
		`🚀 サーバーはポート http://localhost: ${port} / で実行されています`,
	);
});
