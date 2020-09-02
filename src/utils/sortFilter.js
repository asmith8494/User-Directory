const _ = require('lodash');

const sortFilter = (users, filteredGender, filteredState, sortBy) => {
    let sortFilteredList = users;

    if(filteredState !== '' || filteredGender !== 'none' || filteredGender !== '' || sortBy !== 'none' || sortBy !== '')
    {
      if(filteredState) {
        sortFilteredList = filter(sortFilteredList, filteredState);
      }
      if(filteredGender){
        sortFilteredList = filter(sortFilteredList, filteredGender);
      }
      if(sortBy){
        sortFilteredList = sort(sortFilteredList, sortBy);
      }
    }


    return sortFilteredList;
}

exports.sortFilter = sortFilter;

const sort = (users, sortBy) => {
  console.log("sortby: ", sortBy);
  if(sortBy === 'first') {
    return _.sortBy(users, (user) => {
      return user.name.first;
    });
  }
  else if(sortBy === 'last') {
    return _.sortBy(users, (user) => {
      return user.name.last;
    });
  }
  else if(sortBy === 'state') {
    return _.sortBy(users, (user) => {
      return user.location.state;
    });
  }
  else
    return users;
}

const filter = (users, filter) => {
  console.log("filterBy: ", filter);
  if(filter === 'male' || filter === 'female') {
    return _.filter(users, (user) => {
      return user.gender === filter;
    })
  } else  if (filter !== 'none') {
    return _.filter(users, (user) => {
      const userState = user.location.state.toLowerCase().substring(0, filter.length);
      return userState.includes(filter);
    })
  }
  else {
    return users;
  }
}