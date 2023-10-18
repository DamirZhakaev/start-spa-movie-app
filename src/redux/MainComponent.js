// // MainComponent.js
// import React from 'react';
// import { connect } from 'react-redux';
// import { setSearchTerm } from './redux/actions';

// const MainComponent = (props) => {
//   return (
//     <div>
//       <input
//         type="search"
//         className="search-input"
//         placeholder="Search a movie..."
//         value={props.searchTerm}
//         onChange={(e) => props.setSearchTerm(e.target.value)}
//       />
//       {/* Остальной код */}
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   searchTerm: state.searchTerm,
// });

// const mapDispatchToProps = {
//   setSearchTerm,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
