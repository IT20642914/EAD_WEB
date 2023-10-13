package com.example.bookmyseatapp.managers;

import androidx.room.Room;

import com.example.bookmyseatapp.models.database.AppDatabase;

public class DatabaseManager {
    private static DatabaseManager singleton;
    private final String databaseName = "appdb";
    private ContextManager contextManager;
    private AppDatabase database;
    public static DatabaseManager getInstance(){
        if (singleton == null)
            singleton = new DatabaseManager();
        return singleton;
    }

    private DatabaseManager(){
        contextManager = ContextManager.getInstance();
        database = Room.databaseBuilder(
                contextManager.getApplicationContext(),
                AppDatabase.class,
                databaseName).build();
    }

    public AppDatabase db(){
        return database;
    }

}
