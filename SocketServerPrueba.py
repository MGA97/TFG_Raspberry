import socketserver
import struct
import os
import json

try:
    os.remove("/var/www/html/archivo.json")
except:
    pass

class MyTCPHandler(socketserver.BaseRequestHandler):
    
    def handle(self):
        self.data = self.request.recv(1024)
        print("{} wrote:" .format(self.client_address[0]))
        self.unpacked_data = struct.unpack('14f4x', self.data)
        print (self.unpacked_data)
        
        d = {
        'Dedo1': self.unpacked_data[0],
        'Dedo2': self.unpacked_data[1],
        'Dedo3': self.unpacked_data[2],
        'Dedo4': self.unpacked_data[3],
        'Dedo5': self.unpacked_data[4],

        'AccX': self.unpacked_data[5],
        'AccY': self.unpacked_data[6],
        'AccZ': self.unpacked_data[7],
        'GyroX': self.unpacked_data[8],
        'GyroY': self.unpacked_data[9],
        'GyroZ': self.unpacked_data[10],
        'MagnX': self.unpacked_data[11],
        'MagnY': self.unpacked_data[12],
        'MagnZ': self.unpacked_data[13]
        }
        json_obj = json.dumps(d)
        print(json_obj)
        archivo = open("/var/www/html/archivo.json","w")
        archivo.write(str(json_obj))
        archivo.close()

if __name__ == "__main__":
    HOST, PORT = "0.0.0.0", 2320

    with socketserver.TCPServer((HOST, PORT), MyTCPHandler) as server:
        server.serve_forever()
