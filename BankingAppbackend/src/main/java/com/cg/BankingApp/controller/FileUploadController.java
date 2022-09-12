package com.cg.BankingApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cg.BankingApp.helper.FileUploadHelper;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class FileUploadController {
    @Autowired
    private FileUploadHelper fileUploadHelper;
    
    @PostMapping("/upload-file")
    public ResponseEntity<String> uploadFile(@RequestParam("File") MultipartFile file)
    {
//        System.out.println(file.getOriginalFilename());
//        System.out.println(file.getSize());
//        System.out.println(file.getContentType());
//        System.out.println(file.getName());
        try {
            
        
        
        //validation
        if(file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Request must contain a file");
        }
        if(!file.getContentType().equals("application/pdf"))
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Only PDF content type is allowed");
        }
        
        // file upload code
        
        boolean f= fileUploadHelper.uploadFile(file);
        if(f)
        {
            return ResponseEntity.ok("File is successfully uploaded");
        }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong!  Try Again");
    }
}