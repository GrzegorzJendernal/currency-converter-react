import { useQuery } from "react-query";
import Form from "../Form";
import LoadError from "../LoadError";
import Loading from "../Loading";

const Body = ({setResult}) => {
	const {isLoading, isError, data} = useQuery("rates")
	if (isLoading) return <Loading />;
		if (isError) return <LoadError/>;
		return <Form
			setResult={setResult}
			exchangeRate={data}
		/>
};
 export default Body;