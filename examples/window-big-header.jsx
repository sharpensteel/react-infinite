var InfiniteTable = createReactClass({
  getInitialState: function() {
    return {
      isLoading: false,
      rows: [{ id: 1 }]
    };
  },

  _loadTableData: function() {
    // setTimeout(() => {
    //
    // 	let newRows = [...this.state.rows];
    // 	for(let i=0;i<10;i++){
    // 		newRows.push({id: newRows.length+1});
    // 	}
    // 	this.setState({rows: newRows, isLoading:false});
    //
    // },500);
    //
    // this.setState({isLoading: true});
  },

  render: function() {
    return (
      <Infinite
        elementHeight={84}
        useWindowAsScrollContainer
        containerHeight={window.innerHeight}
        infiniteLoadBeginEdgeOffset={200}
        onInfiniteLoad={this._loadTableData}
        isInfiniteLoading={this.state.isLoading}
        loadingSpinnerDelegate={<div>Loading...</div>}
      >
        {this.state.rows.map(r =>
          <div className="test-child" key={r.id}>
            {r.id}
          </div>
        )}
      </Infinite>
    );
  }
});

ReactDOM.render(
  <InfiniteTable />,
  document.getElementById('infinite-window-example')
);
