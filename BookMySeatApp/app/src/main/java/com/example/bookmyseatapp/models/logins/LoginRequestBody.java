package com.example.bookmyseatapp.models.logins;

public class LoginRequestBody {
    public String nic;
    public String password;


    public LoginRequestBody(String nic, String password) {
        this.nic = nic;
        this.password = password;
    }
}
