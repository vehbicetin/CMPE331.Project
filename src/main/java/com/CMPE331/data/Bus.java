package com.CMPE331.data;

import java.util.Date;

/**
 * Created by Lenovo on 8.12.2016.
 */
public class Bus {

    private int busID;
    private String departure;
    private String destination;
    private String time; // DD/MM/YYYY

    public Bus(){}

    public Bus(int busID){
        this.busID = busID;
    }
    public Bus(int busID,String departure,String destination,String time){
        this.busID=busID;
        this.departure=departure;
        this.destination=destination;
        this.time=time;
    }

    public int getBusID(){
        return this.busID;
    }
    public void setBusID(int busID){
        this.busID = busID;
    }
    public String getDeparture() {
        return departure;
    }
    public void setDeparture(String departure) {
        this.departure = departure;
    }
    public String getDestination() {
        return destination;
    }
    public void setDestination(String destination) {
        this.destination = destination;
    }
    public String getTime() {
        return time;
    }
    public void setTime(String time) {
        this.time = time;
    }
}
