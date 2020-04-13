import React,{Component} from 'react';
import '../Main.css';
class Global extends Component{
    
     
    render(){
       const {global} = this.props
  
        const updateDate = new Date(parseInt(global.updated)).toString()
        // console.log(this.props)
        const globalCases = global ?
        (
               
                   <div className="row justify-content-center mt-5">
                       <div className="col-md-3-sm-2-xs-1 global-card">
                            <div className="card card-body bg-secondary">
                                <h4 className="text-center font-weight-bold lead ">Total Cases</h4>
                                <h2 className="font-weight-bold text-center  border-bottom ">{global.cases}</h2>
                                <span className="text-light">Last-Updated {updateDate}</span>
                            </div>
                       </div>
                       <div className="col-md-3-sm-2-xs-1 global-card">
                            <div className="card card-body bg-success">
                                <h4 className="text-center font-weight-bold lead ">Total Recovered</h4>
                                <h2 className="font-weight-bold text-center  border-bottom">{global.recovered}</h2>
                                <span className="text-light">Last:Updated {updateDate}</span>
                            </div>
                       </div>
                       <div className="col-md-3-sm-2-xs-1 global-card">
                            <div className="card card-body bg-danger">
                                <h4 className="text-center font-weight-bold lead ">Total Deaths</h4>
                                <h2 className="font-weight-bold text-center  border-bottom">{global.deaths}</h2>
                                <span className="text-light">Last:Updated {updateDate}</span>
                            </div>
                       </div>
                       
                       
                   </div>
                    
                     
        ) :(
            <h3 className="lead text-center text-gray mt-5 ">Loading Data...</h3>
        )
        return(
            <div>
               {globalCases}
            </div>
        )
    }
}
export default Global;