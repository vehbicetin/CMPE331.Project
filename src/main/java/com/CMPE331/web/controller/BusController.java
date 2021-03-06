/*  CMPE331 Term Project.
 *  Adem Aldemir, Enes Nehir Gürdamar, Emir Burak Selvi, Vehbi Çetin.
 *  This class making database autharization, controlling model and view,
 *  and establishing connection between them.
 *  Created on 05.12.2016
 */

package com.CMPE331.web.controller;

import com.CMPE331.data.Bus;
import com.CMPE331.data.Seat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Lenovo on 5.12.2016.
 */

@Controller
public class BusController {

    int selectedBus;
    int selectedSeat;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String printWelcome(ModelMap model) {

        model.addAttribute("message", "Spring 3 MVC Hello World");
        return "main";
    }


    @RequestMapping(value = "/{name:.+}", method = RequestMethod.GET)
    public ModelAndView hello(@PathVariable("name") String name) {

        ModelAndView model = new ModelAndView();
        model.setViewName("main");
        model.addObject("msg", name);

        return model;
    }

    @RequestMapping(value = "/main", method = RequestMethod.GET)
    @ResponseBody
    public List<Bus> listBuses(){

        try {

            List<Bus> busList = new ArrayList<Bus>();

            // Loading drivers for MySQL
            Class.forName("com.mysql.jdbc.Driver");

            // Creating connection with the database
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/busautomation","cmpe","cmpe1234");

            PreparedStatement ps = con.prepareStatement("SELECT * FROM busautomation.bus");

            // Execute select SQL statement
            ResultSet rs = ps.executeQuery();

            while(rs.next()){

                int id = rs.getInt(1);
                String departure = rs.getString(2);
                String destination = rs.getString(3);
                String time = rs.getString(4);
                Bus bus = new Bus(id,departure,destination,time);
                busList.add(bus);

            }

            return busList;
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }

    }

    @RequestMapping(value = "/choose", method = RequestMethod.POST)
    public String chooseBus(@ModelAttribute("SpringWeb")Seat seatModel, ModelMap model){

        model.addAttribute("bus_id",seatModel.getBus_id());

        int bus_id = seatModel.getBus_id();

        selectedBus = bus_id;

        return "seats";
    }

    @RequestMapping(value = "/reservation", method = RequestMethod.POST)
    public String chooseSeat(@ModelAttribute("SpringWeb")Seat seatModel, ModelMap model){

        model.addAttribute("seat_id",seatModel.getSeat_id());

        int seat_id = seatModel.getSeat_id();
        selectedSeat = seat_id;

        return "reservation";
    }

    @RequestMapping(value = "/res", method = RequestMethod.GET)
    @ResponseBody
    public List<Seat> showSeats(){
        try {

            List<Seat> seatList = new ArrayList<Seat>();

            // Loading drivers for MySQL
            Class.forName("com.mysql.jdbc.Driver");

            // Creating connection with the database
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/busautomation","cmpe","cmpe1234");

            PreparedStatement ps = con.prepareStatement("SELECT * FROM busautomation.bus_seat WHERE bus_id = "+selectedBus);

            // Execute select SQL statement
            ResultSet rs = ps.executeQuery();

            while(rs.next()){

                int busid = rs.getInt(1);
                int seatid = rs.getInt(2);
                boolean status = rs.getBoolean(3);
                Seat seat = new Seat(busid, seatid, status);
                seatList.add(seat);
            }
            return seatList;
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }

    }

    @RequestMapping(value = "/selected", method = RequestMethod.GET)
    @ResponseBody
    public List<Seat> showSelectedSeat(){
        try {

            List<Seat> seatList = new ArrayList<Seat>();

            // Loading drivers for MySQL
            Class.forName("com.mysql.jdbc.Driver");

            // Creating connection with the database
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/busautomation","cmpe","cmpe1234");

            PreparedStatement ps = con.prepareStatement("SELECT * FROM busautomation.bus_seat WHERE bus_id = "+selectedBus+ " AND seat_id = " + selectedSeat);

            // Execute select SQL statement
            ResultSet rs = ps.executeQuery();

            while(rs.next()){

                int busid = rs.getInt(1);
                int seatid = rs.getInt(2);
                boolean status = rs.getBoolean(3);
                Seat seat = new Seat(busid, seatid, status);
                seatList.add(seat);
            }
            return seatList;
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }

    }

    @RequestMapping(value = "/complete", method = RequestMethod.POST)
    public String reserveTicket(@ModelAttribute("SpringWeb")Seat seatModel, ModelMap model){


        try {

            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/busautomation","cmpe","cmpe1234");

            PreparedStatement ps = con.prepareStatement("UPDATE bus_seat SET status = 0 WHERE bus_id = "+selectedBus+ " AND seat_id = " + selectedSeat);
            ps.executeUpdate();

            return "main";
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
