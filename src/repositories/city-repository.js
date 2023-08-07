const {City} = require("../models/index.js");

class CityRepository{

  async createCity({name}){
    try {
      const city  = await City.create({name});
      return city;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateCity(cityId,data){
    try {
      await City.update(data,{
        where:{
          id:cityId
        },
        returning:true
      })
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteCity(cityId){
    try {
      await City.destroy({
        where:{
          id:cityId
        }
      });
      return true;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getCity(cityId){
    try {
      const city = await City.findByPk(cityId);
      return city === null ? console.log("not found"):city;
    } catch (error) {
      console.log(error);
      throw error;
    }

  }
}