package com.CMPE331.data;

/**
 * Created by Lenovo on 17.12.2016.
 */
public class Seat {

    private int bus_id;
    private int seat_id;
    private boolean seat_status;

    public Seat(int bus_id, int seat_id, boolean seat_status) {
        this.bus_id = bus_id;
        this.seat_id = seat_id;
        this.seat_status = seat_status;
    }

    public Seat(){}

    public int getSeat_id() {
        return seat_id;
    }

    public void setSeat_id(int seat_id) {
        this.seat_id = seat_id;
    }

    public int getBus_id() {
        return bus_id;
    }

    public void setBus_id(int bus_id) {
        this.bus_id = bus_id;
    }

    public boolean isSeat_status() {
        return seat_status;
    }

    public void setSeat_status(boolean seat_status) {
        this.seat_status = seat_status;
    }
}
