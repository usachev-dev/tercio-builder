export const virtues: any[] = [
  {
    id:'Dedication',
    description: 'Adds 1 to Speed.'
  },
  {
    id:'Dexterity',
    description: 'Adds 1 to Melee.'
  },
  {
    id:'Drill',
    description: 'Adds 1 to Shoot.'
  },
  {
    id:'Loyalty',
    description: 'Adds 1 to Discipline.'
  },
  {
    id:'Zeal',
    description: 'Adds 1 to Stamina.'
  },
  {
    id:'Sacrifice',
    description: 'Adds 1 to Courage to resist shooting damage.'
  },
  {
    id:'Will',
    description: 'Adds 1 to Courage to resist melee damage.'
  },
  {
    id:'Presence',
    description: 'Increases command range to 9\".'
  },
  {
    id:'Elan',
    description: 'Increases movement to 9\".'
  },
  {
    id:'Fame',
    description: 'Can interact with any friendly Troop, even with those not belonging to his regiment.'
  },
  {
    id:'Initiative',
    description: 'Adds 2 to his Rank to resolve Initiative draws.'
  },

];
export const traits: any[] = [
  {
    id:'Fast',
    description:'A Commander can invest his efforts to move hastily, without actually carrying out any other action during that activation. He moves normally, and then he will roll the dice to make a Command Check. If successful, he can move again.'
  },
  {
    id:'Inspiring',
    description:'A Troop, either Foot or Horse, will benefit from one of the Virtues of the Commander by adding +1 to one of their Virtues after calculating Increases or Decreases by other causes. As soon as it is the opponent\'s turn to activate this bonus is lost'
  },
  {
    id:'Alert',
    description:'He can, with this action, give an immediate order to a unit to change its facing, even if the unit has already need activated.'
  },
  {
    id:'Authoritarian',
    description:'Following his activation, a Troop within his Command Range will activate without needing to make an order check.'
  },
  {
    id:'Bold',
    description:'He can swap an Order Card that has not yet been executed for another one.'
  },
  {
    id:'Cartographer',
    description:'This Trait, rather than allowing a Command Action, provides benefits when preparing the battle. After rolling the dice to generate terrain points, you can choose to subtract 1 point from the rival\'s roll or add 2 points to yours.'
  },
  {
    id:'Cautious',
    description:'You can place an Order Card on a unit that has already been activated, although it may only be used as a reaction.'
  },
  {
    id:'Comrade-in-arms',
    description:'He can remove an Exhausted token from another Commander. The target roll for this Command Action is 6.'
  },
  {
    id:'Coordinator',
    description:'If successful, two friendly units will be simultaneously activated. These units must be within Command Range of the Commander and in line of sight with him. Unit activation should be sequential, that is, a unit will perform all its activation, and then the other one.'
  },
  {
    id:'Diligent',
    description:'He can remove the Disordered status from a unit. The target roll for this Command Action is 6.'
  },
  {
    id:'Eagle-eyed',
    description:'He forces an enemy unit to be the next troop activated. He doesn\'t need to be within Command Range of the unit, but he must be in line of sight. The target roll for this Command Action is 6.'
  },
  {
    id:'Engineer',
    description:'An Artillery unit within Command Range increases its maximum shooting range by 3\" for every success on the Command Action roll.'
  },
  {
    id:'Erudite',
    description:'The chosen enemy unit cannot be the next one to be activated. If there are other eligible units the enemy must chose a different one. The target needs to be in line of sight, but it can be at any distance from the Commander.'
  },
  {
    id:'Fearless',
    description:'He can join a Troop and perform, if successful, an immediate Assault order with it. The unit is considered activated, dismissing the Order Card that it had. He can, with this activation, make the unit act a second time, but, if he loses the combat the Commander will die, even if the unit is not destroyed, due to his reckless gallantry.'
  },
  {
    id:'Hero',
    description:'A unit that has already been activated during the turn may act again using exactly the same order as in its previous activation that turn. This action automatically makes the Commander Exhausted and gives a Wear marker to the unit if it does not get more that one success in the roll.'
  },
  {
    id:'Honourable',
    description:'He can remove a Wear marker from a Troop, provided there is more that one Wear marker. The target roll for this action is 6.'
  },
  {
    id:'Intriguer',
    description:'An enemy Commander in line of sight, no matter the distance, becomes Exhausted. The target roll for this Command Action is 6.'
  },
  {
    id:'Lucky',
    description:'If he is attached to a unit which is destroyed, he is entitled to a Command Action that, if successful, will allow him to leave the unit at the last moment and survive. In addition, if he rolls two or more successes he will not become Exhausted.'
  },
  {
    id:'Mentor',
    description:'The Troop activated increases the range of its firearms by 2\" for every successful roll of a Command Action. The target unit must be within Command Range.'
  },
  {
    id:'Meticulous',
    description:'He can order a Troop to be the last one to be activated that turn. If successful, it will be the last unit to move even if we have to give our opponent all the remaining activations. If more that one unit has been given this action, they take their turn in reverse order at the end of the turn. E.g. the unit that was first given this order will be the last to move, the unit last given this order will be the first to move.'
  },
  {
    id:'Patient',
    description:'If successful, you will not need to activate a unit and it will be the rival\'s turn again'
  },
  {
    id:'Perfectionist',
    description:'The Command Action targets a friendly, fresh Foot unit which has a Fire order assigned to it. It will then be activated, no matter if the Command Action has been successful or not. If the Command Action is successful, the Shoot value of the unit gets an Increase, but if unsuccessful, the unit fires normally.'
  },
  {
    id:'Pious',
    description:'A friendly unit is activated. It can swap its assigned order with a Resist one. If you already have this order assigned to the unit, you get an Increase in the Order Check'
  },
  {
    id:'Provoker',
    description:'He may force an enemy unit to launch a hasty attack. He must have line of sight, although he is not required to be within Command Range of the target unit. The enemy unit must be able to Assault in order to be able to carry out this action. The unit will lose the Order Card that it was assigned and will follow an Assault order instead. The target roll for this Command Action is 6. The target unit is entitled to make a Discipline check to try to resist being provoked, but it should get as many successes as the Commander that is provoking them to avoid charging.'
  },
  {
    id:'Relentless',
    description:'A friendly Troop, which has been not yet activated, can make a move with a Decrease in its Speed value. This move cannot be used to carry out melee. The unit will not be deemed to have been activated yet and can act when it is its turn.'
  },
  {
    id:'Schemer',
    description:'The target is an enemy unit of Foot or Horse not yet activated and in line of sight with the Commander, although it is not necessary for the target to be within Command Range. The target unit must randomly change its assigned Order Card for another one. The unit owner cannot see the new Order Card until he activates the unit.'
  },
  {
    id:'Smart',
    description:'You can look at an enemy Order Card. There is no need to be within Command Range, but the target must be in line of sight of the Commander.'
  },
  {
    id:'Swift',
    description:'The target unit will not suffer a Decrease when shooting with a Ready order.'
  },
  {
    id:'Terrible',
    description:'An enemy Troop will suffer a Decrease in its Discipline value to react to the imminent activation of friendly troops.'
  },
  {
    id:'Aggressive (a)',
    description:'When a unit that has an Aggressive Commander attached to it charges an enemy, the enemy unit suffers a Decrease in its Discipline value to react if they try to escape.'
  },
  {
    id:'Brave (a)',
    description:'The unit that the Commander joined gets Impetuous and Elite rules while he is attached to it.'
  },
  {
    id:'Calm (a)',
    description:'A unit with a Calm Commander attached to it does not suffer from additional Wear if it fails to complete a Disengage movement.'
  },
  {
    id:'Diplomatic (a)',
    description:'The Commander with this train can seamlessly interact with allied units.'
  },
  {
    id:'Elegant (a)',
    description:'A unit within 6\" of an Elegant Commander may automatically swap a Retreat outcome for a Disengage. The Commander then becomes Exhausted.'
  },
  {
    id:'Gallant (a)',
    description:'A unit with a Gallant Commander attached to it that recieves a Flank Charge does not suffer a Reduction in its Courage value, only in its Melee value.'
  },
  {
    id:'Guarded (a)',
    description:'No enemy unit may end Vanguard movement within 12\" of a Guarded Commander'
  },
  {
    id:'Imperturbable (a)',
    description:'All units withis Command Range automatically get a +1 in their discipline value to react.'
  },
  {
    id:'Passionate (a)',
    description:'The unit that the Commander joins gets the Frenzied rule while he is attached to it.'
  },
  {
    id:'Phlegmatic (a)',
    description:'A unit with a Phlegmatic Commander attached to it does not suffer from the negative effects of being Weary.'
  },
  {
    id:'Prepared (a)',
    description:'All units with the Light rule within Command Range of a Prepared Commander automatically earn the Evasion rule.'
  },
  {
    id:'Selfless (a)',
    description:'If the unit to which the Selfless Commander is attached fails a Break Check, the ckeck can be repeated. The Commander is removed as a casualty, even if unit passes the second Break Check.'
  },
  {
    id:'Wealthy (a)',
    description:'Mercenary units within a Wealthy Commander Command Range can make Break Checks, although they suffer a Decrease in their Discipline value.'
  },
  {
    id:'Accomplice',
    description:'A friendly Commander to whom the Accomplice Commander has line of sight may move up to 9\", even if the friendly Commander is Exhausted.'
  },
  {
    id:'Cold',
    description:'If the enemy uses a successful Command Action which affects him of friendly units within 6\" of him, he can try to cancel the Command Action as long as he is not Exhausted. The Commander immediately makes a Command Action check with a target roll of 6. At least one success is needed to cancel the effects of the Command Action of the enemy and at least two to avoid becoming Exhausted.'
  },
  {
    id:'Determined',
    description:'Target friendly unit should be the next to be activated. If it charges to an enemy unit with less Speed or Disordered and wins the combat, it causes one additional Wear point. If the unit looses the melee, it gets Disordered instead.'
  },
  {
    id:'Energetic',
    description:'Target friendly unit should be the next to be activated. The unit may Face (change facing) at the end of the executed order.'
  },
  {
    id:'Enigmatic',
    description:'Two enemy units that are in line of sight of an Enigmatic Commander, are less than 6\" from each other and have not yet been activated have to swap their Order Cards. The target roll for this Command Action is 6.'
  },
  {
    id:'Enthusiastic',
    description:'Target unit must be the next to be activated. It gets the Light rule during this activation. If the unit has already had the Light rule, it gets the Skirmishers rule.'
  },
  {
    id:'Experienced',
    description:'One of your Shot or Pike companies that is not Weary is dismantled to reinforce a Squadron. The reinforces Squadron can be any of the formations from Liber Militum: Tercios. Both the Company and the Squadron must be in Command Range of the Experienced Commander and within 6\" from each other. The Company is considered destroyed to calculate victory points, but the Squadron removes two Wear markers and is possible to become considered Steady.'
  },
  {
    id:'Expert',
    description:'This Commander can use his Inspire Virtue over a whole brigade. All units that form the Brigade benefit from his virtue in their next activation.'
  },
  {
    id:'Indefatigable',
    description:'A Wear marker can be moved from one unit to another of the same type (Squadron, Company, Horse or Artillery). The units must be from the same Regiment, within 6\" of each other and within Command Range from the Indefatigable Commander. A unit may even lose its last Wear Marker and become Steady. '
  },
  {
    id:'Innovative',
    description:'A unit ig Command Range of the Innovative Commander gets the Extended Arc of Fire rule for the rest of the turn. Furthermore, if the unit is then activated it can swap its current Order Card for a Fire one.'
  },
  {
    id:'Nimble',
    description:'The Commander can leave a unit to which he is attached and join a new one with the same movement. He cannot do that if the same turn he joined the first unit, as he will be Exhausted. He must pass a Command Action to complete the movement, otherwise the Commander will stop halfway between the two units and be Exhausted.'
  },
  {
    id:'Notable',
    description:'A unit anywhere on the battlefield and next to be activated gets an Increase in its Discipline value to make an Order Check. The unit must have Line of Sight with the Notable Commander.'
  },
  {
    id:'Prepared',
    description:'An Artillery unit within Command Range of a prepared Commander that has already been activated during the turn and has Carthorses becomes limbered.'
  },
  {
    id:'Protector',
    description:'Target unit makes a move towards rearguard. If the Command Action is unsuccessful the unit makes the movement but becomes Disordered.'
  },
  {
    id:'Respectable (a)',
    description:'A Respectable Commander does not need to have line of sight or to be within Command Range to inspire his troops.'
  },
  {
    id:'Ruthless',
    description:'Target enemy unit loses the benefits of any Virtues of an attached Commander for the rest of the turn.'
  },
  {
    id:'Sharp',
    description:'A Sharp Commander forces an enemy Commander, whom he can trace line of sight to, to be the next unit to be activated. The target roll for this Command Action is 6.'
  },
  {
    id:'Skilled',
    description:'An arillery unit that has not yet been activated may Face (change facing), to include those units with zero speed. At least two successes are needed on the Order Check when executing the order, otherwise the Commander becomes Exhausted and the Artillery unit loses its Order Card.'
  },
  {
    id:'Stoic',
    description:'Target unit is considered to be Covered until it is activated, reacts or until the end of the turn. (So it get an Increase in its Courage value in the Resist Damage roll when shot at).'
  },
  {
    id:'Tenacious',
    description:'The target unit must have the Light Rule and be the next unit to be activated. If the unit performs a Run or Ready order and ends its activation inside a piece of terrain with the Hidden rule, it cannot be shot at during the rest of the turn.'
  },
  {
    id:'Trickster',
    description:'Target unit must be within terrain with the Hidden rule and must be the next to be activated. If the Command Action is successful the unit gets an Increase on either Melee or Shooting, at the player\'s choice.'
  },
  {
    id:'Undaunted',
    description:'Target unit is considered to be Protected (so it gets an Increase in its Courage value in the Resist Damage roll during melee when charged) until it is activated, reacts or until the end of the turn.'
  }
];
