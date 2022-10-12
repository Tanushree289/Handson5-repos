import React from "react";

const UpdatedComp = OriginalComp => {
    class NewCOmp extends React.Component {

    constructor(props) 
    {
        super(props)
      
        this.state = {
          count:0
        }
      }
  
      incrementCount = () => {
          this.setState(prevState => {
              return {count :prevState.count + 2}
          })
      }

        render() {
            return (<OriginalComp 
            count={this.state.count}
            incrementCount={this.incrementCount} />)
        }
    }
    return NewCOmp
}
export default UpdatedComp