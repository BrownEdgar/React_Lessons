export const renderHeader = (headerFields) => {
  return (
    <>
      {headerFields.map((field) => {
        return (
          <th data-label={field} key={field}>
            {field}
          </th>
        );
      })}
    </>
  );
};

export const renderRow = (entity) => {
  return (
    <>
      {Object.entries(entity).map(([key, value]) => {
        return <td key={key}>{value}</td>;
      })}
    </>
  );
};
