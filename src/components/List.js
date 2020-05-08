import React from 'react';
import PlanningCard from './PlanningCard';

const List = props => {
  return (
    <div style={styles.container}>
      <h2>{props.title}</h2>
      <PlanningCard />
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    width: 300,
    padding: 10
  }
}

export default List;