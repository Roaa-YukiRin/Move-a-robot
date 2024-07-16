# Move-a-robot
Moving a robot by the user pressing the different directional buttons and changing its speed by adding a counter and decreasing it by decreasing the counter on a web page and connecting it to a database.
---------------------------------
## task 1
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/cf07a175-4f71-4ade-9776-6352cfc54c2d)

### 1) changed the background to images
<img width="960" alt="2024-07-08" src="https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/3058d0f9-1600-4fab-9769-77a823e8b64c">

### 2) I divided the screen into two parts and placed the direction buttons to move the robot and a counter to increase the steps on the right side.
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/ec788c7b-c93a-4d72-9112-ca4f2e615b13)

### 3) I added text to describe the robot's movement
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/2574951f-9157-4344-bcd9-20144a9bdc2a)

### 4) To track the robot's movement, I added a body that moves with the buttons, a button to reset the body to its original position, and a counter that resets to 1.
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/848d6a07-23ba-4678-b498-5b39974f73b6)

### 5) Here, the robot's movement is in different directions with the counter set to 1, meaning it moves 1 step.
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/660d592e-5e5d-4aa3-a0d4-3ca0cf63f924)
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/8b461845-6b44-4091-a15d-4b2f58447fb1)
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/44f41db7-6251-4d98-af23-dde5113b6441)
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/93ecdc86-d3ea-4373-a404-04d1b3da15e4)

### 6) Here, the robot's movement is in different directions with the counter set to 2, meaning it moves 2 step.
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/7edb66ea-3a46-404c-bd13-d4a35d831e8e)
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/de1b68f6-a329-4879-93cb-52aa0058b684)
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/55737c1e-7673-4cd9-b3fd-b818e35a92cb)
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/2d47eafe-3d0d-4b01-9840-e3ad5639c42e)

---------------------------------------------------------------------------------------
## Connecting the database to the web page.
### 1) We open the XAMPP program and click on "Start" next to Apache and MySQL
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/7d393215-3c8f-4586-8599-a483f119dce8)

### 2) We write in Google localhost/phpmyadmin/
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/a8a8bc5b-b0e3-48f4-9234-05b5317fc6b8)

### 3) We go to the folder where we created the web page.
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/7b17a731-524e-4805-94f0-03e584175477)

### 4) go to local dask(c) => xammp =>htdoct
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/a55a0f67-0569-4d84-abaa-182d16b87c75)
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/940ec896-7d4e-4c71-9918-9eefcf1e4d44)
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/5b0232c1-2f8f-4caa-8652-c7542d6ba047)

### 5) create new folder and name it "dirct_rubot" with out any spaice in the name
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/e3b84706-99b3-4d25-8696-9e8db883838f)

### 6) We copy all the files with the original file and move it to the new file.
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/0d1cf585-d5a7-45a9-93f0-d6e445613790)

### 7) We write in Google localhost/dirct_rubot/
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/7d356f48-9821-4aa1-866c-55e65db9e00f)

### 8) go to  Google localhost/phpmyadmin/
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/a8a8bc5b-b0e3-48f4-9234-05b5317fc6b8)

### 9) new => name=dirct-rubot  => utf8_general_ci=> Create
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/30715b84-75de-4c1c-9f3d-2db080a67de4)
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/c61d1998-3d7f-4495-a96c-3ba43789a178)

### 10) create table name"move_direc" have =5
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/5b9ac61c-9911-41d0-a180-e819eadcfcbc)

### 11)
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/02dbf006-5588-42e3-927e-31bf5216ae41)

### 12) click go
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/e8651860-0e1a-48f9-babe-b76635241fb4)

### 13) click in the small squre and save
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/cfaee398-2afd-439c-ae21-5a32bd5f07e8)

### 14)
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/907f327b-68cb-471d-8f11-744f8d45168b)

### 15) 
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/ba5b29e3-19d5-46af-977f-88eba704d8d3)

### 16) 
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/a48d907c-a8cf-4f84-ad4d-5e2440786ef1)

### 17)
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/11cdc4a9-15d5-4d59-8147-9a8ed9e8628f)

### 18)
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/ff152464-696a-4752-9fd3-9d341c7c90cf)

### 19) localhost/dirct_rubot/admen/
![image](https://github.com/Roaa-YukiRin/Move-a-robot/assets/132842520/3f078073-ee47-429c-9dd6-b5422f3000e0)

====================================
### to conneact xammp with php we write thise code
![image](https://github.com/user-attachments/assets/6fbc4257-1290-4af2-b69e-7f00f851a775)

### to add data in the table
![image](https://github.com/user-attachments/assets/be71e119-0b7e-4997-a4ea-00de5d19dede)

### resive data from html 
![image](https://github.com/user-attachments/assets/1c69dfaa-ca2d-4d81-8443-360a681de775)

=========================
# java script
### we add  ajax mithod to connct data acshin with xammp
![image](https://github.com/user-attachments/assets/aa5549dd-d161-4002-8319-6609268a157a)








