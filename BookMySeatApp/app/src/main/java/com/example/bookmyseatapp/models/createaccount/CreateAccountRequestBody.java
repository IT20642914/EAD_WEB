package com.example.bookmyseatapp.models.createaccount;

public class CreateAccountRequestBody {
    public String nic;
    public String password;
    public String email;

    public String mobileNo;

    public CreateAccountRequestBody(String nic, String password, String email, String mobileNo) {
        this.nic = nic;
        this.password = password;
        this.email = email;
        this.mobileNo = mobileNo;
    }
}
