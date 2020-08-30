const _ = require('lodash');

const sortFilter = (users, filteredGender, filteredState, sortBy) => {

    console.log(`filteredState: ${filteredState}\nfilteredGender: ${filteredGender}\nsortBy: ${sortBy}`);

    let sortFilteredList = users;

    if(filteredState !== '' || filteredGender !== 'none' || filteredGender !== '' || sortBy !== 'none' || sortBy !== '')
    {
      if(filteredState) {
        console.log(`state if: ${filteredState}`);
        sortFilteredList = filter(sortFilteredList, filteredState);
        console.log("filteredStates");
      }
      if(filteredGender){
        console.log(`gender if: ${filteredGender}`);
        sortFilteredList = filter(sortFilteredList, filteredGender);
        console.log("filteredGenders");
      }
      if(sortBy){
        console.log(`sortBy if: ${sortBy}`);
        sortFilteredList = sort(sortFilteredList, sortBy);
        console.log("sorted");
      }
    }


    return sortFilteredList;
}

exports.sortFilter = sortFilter;

const sort = (users, sortBy) => {

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
  if(filter === 'male' || filter === 'female') {
    return _.filter(users, (user) => {
      return user.gender === filter;
    })
  } else {
    return _.filter(users, (user) => {
      const userState = user.location.state.toLowerCase().substring(0, filter.length);
      return userState.includes(filter);
    })
  }
}


// sort() {
//   let toSort;

//   if(this.state.filteredGender || this.state.filteredState) {
//     toSort = this.state.renderedUsers;

//     this.setState({toSort: _.sortBy(toSort, (user) => {
//       if(this.state.sortBy === 'first') {
//         return user.name.first;
//       }
//       else if(this.state.sortBy === 'last') {
//         return user.name.last;
//       }
//       else if(this.state.sortBy === 'state') {
//         return user.location.state;
//       }
//     })});
//   }
//   else {
//     toSort = this.state.users;

//     this.setState({renderedUsers: _.sortBy(toSort, (user) => {
//       if(this.state.sortBy === 'first') {
//         return user.name.first;
//       }
//       else if(this.state.sortBy === 'last') {
//         return user.name.last;
//       }
//       else if(this.state.sortBy === 'state') {
//         return user.location.state;
//       }
//     })});
//   }
  
// }

// filterState() {
//   console.log(`inside filterstate`);
//   let toFilter;

//   if(this.state.sorted || this.state.filteredGender) {
//     toFilter = this.state.renderedUsers;

//     console.log(`filterby in filterstate: ${this.state.filterBy}`)

//     this.setState({renderedUsers: _.filter(toFilter, (user) => {
//       return user.location.state.includes(this.state.filterBy)
//     })})
//   }
//   else {
//     console.log(`inside filterstate else`);
//     toFilter = this.state.users;

//     //console.log(toFilter[0].state.location.includes(this.state.filterBy));

//     this.setState({renderedUsers: _.filter(toFilter, (user) => {
//       const userState = user.location.state.toLowerCase().substring(0, this.state.filterBy.length);

//       console.log(`userState: ${userState}\nfilterBy: ${this.state.filterBy}`);
//       return userState.includes(this.state.filterBy)
//     })})
//   }
// }