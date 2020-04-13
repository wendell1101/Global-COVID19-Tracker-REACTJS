import React,{Component} from 'react'


class Countries extends Component{
   
    
    render(){
        const {countries} = this.props
      
        const countryList = countries  ? (
            countries.map(country =>{
                if(country.countryInfo._id != null){
                    return(
                        <div className="row country" key={country.countryInfo._id}>
                                <div className="col" key={1}>
                                    
                                    <div className="card card-body text-center card">
                                    <div className="row">
                                        <div className="col">
                                             <img className="flag"src={country.countryInfo.flag} alt=""/>
                                        </div>
                                       
                                        <div className="col">
                                            <h1 className="text-center">{country.country}</h1>   
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <small>Total Cases:<h3>{country.cases}</h3></small>
                                            <small>Total Deaths:<h3>{country.deaths}</h3></small>
                                            <small>Today Cases:<h3>{country.todayCases}</h3></small>   
                                        </div>
                                        <div className="col">
                                            <small>Total Recoveries:<h3>{country.recovered}</h3></small>
                                            <small>Total Critical:<h3>{country.critical}</h3></small>
                                            <small>Today Deaths:<h3>{country.todayDeaths}</h3></small>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                }
                
            })
        ) :''
        return(
            <div className="main">             
                {countryList}
            </div>
        )
    }
}
export default Countries;