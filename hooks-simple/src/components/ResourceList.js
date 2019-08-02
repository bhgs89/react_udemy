import React from 'react';
import useResources from './useResources';

// class ResourceList extends React.Component {
//   state = { resource: [] };

//   async componentDidMount() {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

//     this.setState({ resource: response.data });
//   }

//   // Using prevProps to avoid endless fetching
//   async componentDidUpdate(prevProps) {
//     if (prevProps.resource !== this.props.resource) {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/${this.props.resource}`,
//       );

//       this.setState({ resource: response.data });
//     }
//   }

//   render() {
//     return <div>{this.state.resource.length}</div>;
//   }
// }

// Define function for re-use of hooks
// const useResources = resource => {
//   const [resources, setResources] = useState([]);

//   useEffect(() => {
//     (async resource => {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

//       setResources(response.data);
//     })(resource);
//   }, [resource]);

//   return resources;
// };

const ResourceList = ({ resource }) => {
  // instead of state
  //const [resources, setResources] = useState([]);

  // Using useEffect
  // Instead of componentDidMount()
  // componentDidUpdate() case
  //    If 2nd parameter of useEffect value is same, it is not called
  //    If 2nd parameter of useEffect value is different, it is called (componentDidUpdate)
  //        2nd parameter for object { ... } is always different because it has different memory location
  //useEffect(() => {
  //  (async resource => {
  //    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
  //
  //    setResources(response.data);
  //  })(resource);
  //}, [resource]);
  const resources = useResources(resource);

  return (
    <div>
      <ul>
        {resources.map(record => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
