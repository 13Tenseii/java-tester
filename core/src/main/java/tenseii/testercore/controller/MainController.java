package tenseii.testercore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import tenseii.testercore.entity.User;
import tenseii.testercore.repo.UserRepo;

import java.util.List;

@RestController
@RequestMapping("api")
public class MainController {

    private final UserRepo userRepo;

    @Autowired
    public MainController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @ResponseBody
    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepo.getAllUsers();
    }
}
