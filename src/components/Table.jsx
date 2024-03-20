const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
     {sat.map((data, id) => { //data and id need to be passed in the right spots!!!
      return (
        <tr key={id}>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          {data.operational ? <td>active</td> : <td>inactive</td>}
        </tr>
      );
     })}
     </tbody>
   </table>
  );
};

export default Table;