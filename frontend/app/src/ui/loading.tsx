import { Loader } from "react-feather";

const Loading = () => {
	return <Loader className="animate-spin" />;
};

const LoadingDisplay = () => {
	return (
		<div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-slate-100 z-50">
			<Loading />
		</div>
	);
};

export default LoadingDisplay;
