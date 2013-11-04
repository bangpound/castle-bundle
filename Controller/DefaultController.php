<?php

namespace Bangpound\Bundle\CastleBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('BangpoundCastleBundle:Default:index.html.twig', array('name' => $name));
    }
}
