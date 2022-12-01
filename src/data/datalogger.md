# Datalogger circuit using ESP8266 NodeMCU and Neo6m Gps Module


## Circuit Diagram

![Schematic Diagram for circuit](~tt1190975/images/projects/DataLoggerCircuit.jpg)


## Code

    #include <Arduino.h>
    #if defined(ESP32)
      #include <WiFi.h>
    #elif defined(ESP8266)
      #include <ESP8266WiFi.h>
    #endif
    #include <Firebase_ESP_Client.h>
    
    #include <TinyGPS++.h>
    #include <SoftwareSerial.h>
    
    TinyGPSPlus gps;
    SoftwareSerial SerialGPS(4, 5); 
    
    
    //Provide the token generation process info.
    #include "addons/TokenHelper.h"
    //Provide the RTDB payload printing info and other helper functions.
    #include "addons/RTDBHelper.h"
    
    // Insert your network credentials
    #define WIFI_SSID "Wifi_SSID"
    #define WIFI_PASSWORD "Wifi_PASSWORDy2dkmeq7"
    
    
    #define USER_EMAIL "auth_email"
    #define USER_PASSWORD "auth_pass"
    // Insert Firebase project API Key
    #define API_KEY "API KEY"
    
    // Insert RTDB URLefine the RTDB URL */
    #define DATABASE_URL "Database_link" 
    
    //Define Firebase Data object
    FirebaseData fbdo;
    
    FirebaseAuth auth;
    FirebaseConfig config;
    
    unsigned long sendDataPrevMillis = 0;
    int count = 0;
    bool signupOK = false;
    
    //SoftwareSerial SerialGPS(4, 5); 
    float Latitude , Longitude;
    //int year , month , date, hour , minute , second;
    //String DateString , TimeString , LatitudeString , LongitudeString;
    
    void setup(){
      Serial.begin(115200);
      SerialGPS.begin(9600);
      WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
      Serial.print("Connecting to Wi-Fi");
      while (WiFi.status() != WL_CONNECTED){
        Serial.print(".");
        delay(300);
      }
      Serial.println();
      Serial.print("Connected with IP: ");
      Serial.println(WiFi.localIP());
      Serial.println();
    
      /* Assign the api key (required) */
      config.api_key = API_KEY;
    
    
      auth.user.email = USER_EMAIL;
      auth.user.password = USER_PASSWORD;
      /* Assign the RTDB URL (required) */
      config.database_url = DATABASE_URL;
    
      /* Sign up */
    //  if (Firebase.signUp(&config, &auth, "", "")){
    //    Serial.println("ok");
    //    signupOK = true;
    //  }
    //  else{
    //    Serial.printf("%s\n", config.signer.signupError.message.c_str());
    //  }
    
      /* Assign the callback function for the long running token generation task */
      config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
      
      Firebase.begin(&config, &auth);
      Firebase.reconnectWiFi(true);
    }
    
    void loop(){
      if(SerialGPS.available() > 0){
        if (gps.encode(SerialGPS.read()))
        {
          if (gps.location.isValid())
          {
            Latitude = gps.location.lat();
    //        LatitudeString = String(Latitude , 6);
            Longitude = gps.location.lng();
    //        LongitudeString = String(Longitude , 6);
          
        
         if (Firebase.ready()  && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)){
        sendDataPrevMillis = millis();
        // Write an Int number on the database path test/int
        if (Firebase.RTDB.setFloat(&fbdo, "test/gauransh/Latitude", Latitude)){
          Serial.println("PASSED");
          Serial.println("PATH: " + fbdo.dataPath());
          Serial.println("TYPE: " + fbdo.dataType());
        }
        else {
          Serial.println("FAILED");
          Serial.println("REASON: " + fbdo.errorReason());
        }
        count++;
        
        // Write an Float number on the database path test/float
        if (Firebase.RTDB.setFloat(&fbdo, "test/gauransh/Longitude", Longitude)){
          Serial.println("PASSED");
          Serial.println("PATH: " + fbdo.dataPath());
          Serial.println("TYPE: " + fbdo.dataType());
        }
        else {
          Serial.println("FAILED");
          Serial.println("REASON: " + fbdo.errorReason());
        }   }   }   } } }


## Actual Figure
![Actual Circuit made](~tt1190975/images/projects/DataLoggerCircuit.jpg)
## Video
