package com.example.bookmyseatapp.managers;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.widget.Toast;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class NetworkManager {
    private static NetworkManager singleton;

    private Retrofit retrofit;
    private final String baseUrl = "https://localhost:7282/api/";
    private ConnectivityManager connectivityManager;

    private ContextManager contextManager;

    public static NetworkManager getInstance(){
        if (singleton == null)
            singleton = new NetworkManager();
        return NetworkManager.singleton;
    }

    private NetworkManager(){
        contextManager = ContextManager.getInstance();
        retrofit = new Retrofit.Builder()
                .baseUrl(baseUrl)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
    }

    public <T> T createService(Class<T> serviceClass)
    {
        return retrofit.create(serviceClass);
    }

    public boolean isNetworkAvailable(){
        Context context = contextManager.getApplicationContext();

        if (connectivityManager == null) {
            connectivityManager = (ConnectivityManager) context
                    .getSystemService(Context.CONNECTIVITY_SERVICE);
        }

        NetworkInfo info = connectivityManager.getActiveNetworkInfo();
        boolean available = info != null && info.isConnectedOrConnecting();

        if (!available){
            Toast.makeText(context, "Please connect to the internet and retry", Toast.LENGTH_LONG).show();
        }

        return available;
    }

}
