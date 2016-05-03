using Microsoft.AspNet.SignalR;
using System;
namespace ArduinoHub
{
    public class ArduinoHub : Hub
    {
        public void Send1(string sensor_val)
        {
            
            double sensorValue1 = Convert.ToDouble(sensor_val);
            double controlValue1 = 0;
            if (sensorValue1 < 470) controlValue1 = 50;
            if (sensorValue1 < 450) controlValue1 = 150;
            if (sensorValue1 < 430) controlValue1 = 250;
            // Call the broadcastMessage method to update clients.
            Clients.All.broadcastMessage1(sensorValue1, controlValue1);
        }
        public void Send2(string sensor_val)
        {
            double sensorValue2 = Convert.ToDouble(sensor_val);
            double controlValue2 = 0;
            if (sensorValue2 < 200) controlValue2 = 50;
            if (sensorValue2 < 150) controlValue2 = 155;
            if (sensorValue2 < 100) controlValue2 = 255;
            // Call the broadcastMessage method to update clients.
            Clients.All.broadcastMessage2(sensorValue2, controlValue2);
        }
        public void Send3(string sensor_val)
        {
            double sensorValue1 = Convert.ToDouble(sensor_val);
            double controlValue3 = 0;
            if (sensorValue1 < 450) controlValue3 = 255;
            // Call the broadcastMessage method to update clients.
            Clients.All.broadcastMessage3(sensorValue1, controlValue3);
        }
        public void Send4(string sensor_val)
        {
            double sensorValue2 = Convert.ToDouble(sensor_val);
            double controlValue3 = 0;
            if (sensorValue2 < 150) controlValue3 = 255;
            // Call the broadcastMessage method to update clients.
            Clients.All.broadcastMessage4(sensorValue2, controlValue3);
        }
    }
}